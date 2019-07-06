import { getGreeting } from '../support/app.po';

describe('gui', () => {
    beforeEach(() => cy.visit('/'));

    it('should display welcome message', () => {
        getGreeting().contains('Welcome to gui!');
    });
});
