import { store } from '../../store';

export function onNavigatingTo(args) {
  const page = args.object;
  const vm = {
    incidents: store.incidents,
    
    onNewIncident() {
      const frame = args.object.frame;
      frame.navigate('pages/incident/incident-form');
    },
    
    onLogout() {
      store.setUser(null);
      const frame = args.object.frame;
      frame.navigate('pages/login/login-page');
    }
  };
  
  page.bindingContext = vm;
}