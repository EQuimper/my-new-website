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
      var toast = this.get('toast');

      var name = this.get('name');
      var email = this.get('emailAddress');
      var message = this.get('message')


      toastr.success(`
        Thank you! I just received your message: ${name}
      `);
      this.set('name', '');
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
