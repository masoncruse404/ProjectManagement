// - /src/notes/spec/notes-add.api.spec.ts - new note validation

import * as request from 'supertest';
 describe('POST /notes-add', () => {
   it('should have the response', async () => {
    const baseURL = 'http://localhost:3770/v1';
    const apiRequest = request(baseURL);
    const data = await apiRequest.post("/authentication/login").send({"Admin_Username" : "mason", "Admin_Password" : "test"});
    const token = data.body.data.accessToken
    const response = await apiRequest.post('/note/add').set({"Authorization" : `Bearer ${token}`}).send({"Notes" : "Test note", "Project_ID" : 1328 });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
   });
 });

