import { store } from '../../store';

export function onNavigatingTo(args) {
  const page = args.object;
  const vm = {
    username: '',
    password: '',
    errorMessage: '',
    
    onLogin() {
      // Simple mock authentication
      if (this.username === 'admin' && this.password === 'admin') {
        store.setUser({ 
          username: this.username, 
          role: 'admin' 
        });
        const frame = args.object.frame;
        frame.navigate('pages/home/home-page');
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    }
  };
  
  page.bindingContext = vm;
}