export interface MenuCategory {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface TimeSlot {
  id: string;
  start_time: string;
  end_time: string;
  max_covers: number;
  day_of_week: number;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  role: 'guest' | 'staff' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface Reservation {
  id: string;
  user_id: string;
  time_slot_id: string;
  covers: number;
  status: 'pending' | 'confirmed' | 'canceled' | 'completed';
  created_at: string;
  updated_at: string;
}
