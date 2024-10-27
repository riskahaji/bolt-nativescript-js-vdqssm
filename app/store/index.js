import { Observable } from '@nativescript/core';

class Store extends Observable {
  constructor() {
    super();
    this.incidents = [];
    this.currentUser = null;
  }

  addIncident(incident) {
    this.incidents.push({
      ...incident,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'pending'
    });
    this.notifyPropertyChange('incidents', this.incidents);
  }

  deleteIncident(id) {
    this.incidents = this.incidents.filter(incident => incident.id !== id);
    this.notifyPropertyChange('incidents', this.incidents);
  }

  updateIncident(id, updatedData) {
    this.incidents = this.incidents.map(incident => 
      incident.id === id ? { ...incident, ...updatedData } : incident
    );
    this.notifyPropertyChange('incidents', this.incidents);
  }

  setUser(user) {
    this.currentUser = user;
    this.notifyPropertyChange('currentUser', this.currentUser);
  }
}

export const store = new Store();