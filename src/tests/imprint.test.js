
//Lots of help from the Jest documentation
import { whenSubmit } from '/rashmit_git_Repos/fend-webpack-sass/src/client/js/imprint';
import { getApiData } from '/rashmit_git_Repos/fend-webpack-sass/src/client/js/imprint';


test('expects to be a function', () => {

    expect(typeof whenSubmit()).toBe('function');

});



test('expects to be a function', () => {

    expect(typeof getApiData()).toBe('function');

});