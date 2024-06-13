// - /src/notes/spec/notes-edit.api.spec.ts - notes edit validation

import * as request from 'supertest';
 describe('PUT /notes-edit', () => {
   it('should have the response', async () => {
    const baseURL = 'http://localhost:3770/v1';
    const apiRequest = request(baseURL);
    const data = await apiRequest.post("/authentication/login").send({"Admin_Username" : "mason", "Admin_Password" : "test"});
    const token = data.body.data.accessToken
    const response = await apiRequest.put('/note/edit').set({"Authorization" : `Bearer ${token}`}).send({"Notes" : "Test note", "Project_Notes_ID" : 1239 });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
   });
 });

