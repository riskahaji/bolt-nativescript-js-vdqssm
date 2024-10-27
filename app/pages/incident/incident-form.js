import { store } from '../../store';

export function onNavigatingTo(args) {
  const page = args.object;
  const vm = {
    source: '',
    actor: '',
    target: '',
    type: '',
    description: '',
    location: '',
    casualties: '',
    
    onSubmit() {
      if (!this.validateForm()) {
        alert('Please fill in all required fields');
        return;
      }
      
      store.addIncident({
        source: this.source,
        actor: this.actor,
        target: this.target,
        type: this.type,
        description: this.description,
        location: this.location,
        casualties: this.casualties
      });
      
      const frame = args.object.frame;
      frame.goBack();
    },
    
    validateForm() {
      return this.source && this.type && this.description && this.location;
    }
  };
  
  page.bindingContext = vm;
}