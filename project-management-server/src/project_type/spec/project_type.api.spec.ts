// - /src/project_type/spec/project_type.api.spec.ts

import * as request from 'supertest';
 describe('GET /project-type', () => {
   it('should have the response', async () => {
    const baseURL = 'http://localhost:3770/v1';
    const apiRequest = request(baseURL);
    const data = await apiRequest.post("/authentication/login").send({"Admin_Username" : "mason", "Admin_Password" : "test"});
    const token = data.body.data.accessToken
    const response = await apiRequest.get('/project-types').set({"Authorization" : `Bearer ${token}`});
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data")
   });
 });

