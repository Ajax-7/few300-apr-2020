import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MusicState } from '../../reducers';
import { songAdded } from '../../actions/song.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-entry',
  templateUrl: './song-entry.component.html',
  styleUrls: ['./song-entry.component.scss']
})
export class SongEntryComponent implements OnInit {

  songForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<MusicState>) { }

  ngOnInit(): void {
    this.songForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      artist: ['', [Validators.required, bandNotAllowedValidator(/nickleback/i)]],
      album: ['', Validators.required],
      year: [2020, [Validators.max(2030), Validators.min(1800)]]
    });

    const album = this.songForm.get('album');
    album.valueChanges.subscribe(change => console.log(change));
  }
  get title() { return this.songForm.get('title'); }
  get artist() { return this.songForm.get('artist'); }

  submit(elToFocus: HTMLInputElement, stay: boolean) {

    this.store.dispatch(songAdded({ ...this.songForm.value }));
    if (stay) {
      this.songForm.reset();
      elToFocus.focus();
    } else {
      // take them to the song list.
      this.router.navigate(['/music/songs']);
    }
  }


}

function bandNotAllowedValidator(bandName: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const badBand = bandName.test(control.value);
    return badBand ? { badband: { value: control.value } } : null;
  };
}
