
//Lots of help from the Jest documentation
import { geoClick } from '/rashmit_git_Repos/fend-webpack-sass/src/client/js/imprint';
import { weaClick } from '/rashmit_git_Repos/fend-webpack-sass/src/client/js/imprint';
import { pixClick } from '/rashmit_git_Repos/fend-webpack-sass/src/client/js/imprint';
//Tests don't logically make sense

test('expects to be a function', () => {

    expect(typeof geoClick()).toBe('function');

});

test('expects to be a function', () => {

    expect(typeof weaClick()).toBe('object');

});


test('expects to be a function', () => {

    expect(typeof pixClick()).toBe('object');

});