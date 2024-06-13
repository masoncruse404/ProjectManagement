// - /src/list_projects/spec/list_projects.api.spec.ts - list project validation

import * as request from 'supertest';
 describe('GET /projects/:project_id', () => {
   it('should have the response', async () => {
    const baseURL = 'http://localhost:3770/';
    const apiRequest = request(baseURL);
    const data = await apiRequest.post("v1/authentication/login").send({"Admin_Username" : "mason", "Admin_Password" : "test"});
    const token = data.body.data.accessToken
    const response = await apiRequest.get('v1/projects/1319').set({"Authorization" : `Bearer ${token}`});
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
   });
 });

