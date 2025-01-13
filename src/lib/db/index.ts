import { supabase } from '../supabase';

// Esempio di funzione per ottenere tutte le categorie del menu
export const getMenuCategories = async () => {
  const { data, error } = await supabase
    .from('menu_categories')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
};

// Esempio di funzione per ottenere tutti gli elementi del menu
export const getMenuItems = async () => {
  const { data, error } = await supabase
    .from('menu_items')
    .select(`
      *,
      menu_items_categories (
        menu_categories (*)
      )
    `);

  if (error) throw error;
  return data;
};
