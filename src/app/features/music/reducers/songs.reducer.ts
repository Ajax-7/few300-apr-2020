import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

// const initialState = adapter.getInitialState();
const initialState: SongState = {
  ids: ['1', '2', '3'],
  entities: {
    1: {
      id: '1', title: 'Slow Ride', artist: 'Foghat', album: 'SloRide', year: 1981
    },
    2: {
      id: '2', title: 'Like a Prayer', artist: 'Madonna', album: 'Like a Prayer', year: 1983
    },
    3: {
      id: '3', title: 'Cassavetes', artist: 'Fugazi', album: 'In on the Kill Taker', year: 1992
    }
  }

};
const reducerFunction = createReducer(
  initialState
);

export function reducer(state: SongState = initialState, action: Action) {
  return reducerFunction(state, action);
}



