// API simple para obtener mi perfil desde cualquier página de desufuturo.com
// Usa el mismo token de localStorage que se comparte en todo el dominio

const API_URL = "https://desufuturo.com/api";

/**
 * Obtiene el perfil del usuario actualmente logueado
 * Funciona desde cualquier página del dominio desufuturo.com
 */
export async function getMiPerfil() {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error("No hay token disponible. Usuario no logueado.");
  }

  try {
    // Decodificar el JWT para obtener mi ID
    const payload = JSON.parse(atob(token.split('.')[1]));
    const myId = payload.id;

    const res = await fetch(`${API_URL}/users/${myId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (res.status === 401 || res.status === 403) {
      // Token inválido, limpiar localStorage
      localStorage.removeItem('token');
      throw new Error("Token inválido. Sesión expirada.");
    }
    
    if (!res.ok) {
      throw new Error(`Error al obtener perfil: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error obteniendo mi perfil:', error);
    throw error;
  }
}

/**
 * Verifica si hay un usuario logueado
 */
export function isLoggedIn(): boolean {
  const token = localStorage.getItem('token');
  if (!token) return false;
  
  try {
    // Verificar que el token no esté expirado
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Date.now() / 1000;
    return payload.exp > now;
  } catch {
    return false;
  }
}

/**
 * Obtiene la información básica del usuario desde el token (sin hacer request)
 */
export function getUserFromToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return {
      id: payload.id,
      email: payload.email,
      nombre: payload.nombre
    };
  } catch {
    return null;
  }
}

/**
 * Cerrar sesión (elimina el token)
 */
export function logout() {
  localStorage.removeItem('token');
  // Opcional: redirigir a login
  // window.location.href = '/es/connect/register';
}