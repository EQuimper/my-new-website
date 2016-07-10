import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  emailAddress: '',
  message: '',

  toast: Ember.inject.service(),

  nameValid: Ember.computed.gte('name.length', 2),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  messageValid: Ember.computed.gte('message.length', 5),

  isDisabled: Ember.computed.and('nameValid', 'isValid', 'messageValid'),

  actions: {
    sendMessage() {
      const name = this.get('name');
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', {name, email, message});
      newContact.save().then((response, error) => {
        if (error) {
          toastr.error(error);
        }
        toastr.success(`
          Thank you! I just received your message: ${name}
        `);
        this.set('name', '');
        this.set('emailAddress', '');
        this.set('message', '');
      });
    }
  }
});
