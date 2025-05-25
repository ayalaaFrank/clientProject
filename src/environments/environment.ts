export const environment = {
  production: false,
  apiUrl: 'https://localhost:7132/api', // או http://localhost:5000/api
  authTokenKey: 'auth_token',
  userPermissions: {
    canManageEmployees: true,
    canManageCourses: true,
    canViewReports: true,
  }
};