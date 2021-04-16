const faker = require('faker')
describe('Gabung Cermati', () => {
  it('sukses gabung', (browser)=>{
    browser
        .url('https://www.cermati.com/gabung')
        .waitForElementVisible('body')
        .setValue('input[type=text][name=email]', faker.internet.email())
        .setValue('input[type=password][id=password]', 'Abcde!123')
        .setValue('input[type=password][name=confirmPassword]', 'Abcde!123')
        .setValue('input[type=text][name=firstName]', faker.name.firstName()) 
        .setValue('input[type=text][name=lastName]', faker.name.lastName()) 
        .setValue('input[type=tel][name=mobilePhone]', faker.phone.phoneNumber('081#########'))
        .setValue('input[type=text][name=residenceCity]', 'JAKARTA BARAT')
        .waitForElementVisible('div.autocomplete-list-item')
        .click('div.autocomplete-list-item')
        .click('button[type=submit]')
        .pause(15000)
        .end();
  })
})
