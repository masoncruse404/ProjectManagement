// - /src/file-upload/spec/get-project-file-download.api.spec.ts - download project file validation

import * as request from 'supertest';

 describe('GET  /get-project-file-download', () => {
   it('should have the response', async () => {
    const baseURL = 'http://localhost:3770/v1';
    const apiRequest = request(baseURL);
    const data = await apiRequest.post("/authentication/login").send({"Admin_Username" : "mason", "Admin_Password" : "test"});
    const token = data.body.data.accessToken
    const response = await apiRequest.get("/files/download/1328-project-image.jpg").set({"Authorization" : `Bearer ${token}`});
    expect(response.status).toBe(200);
   });
 });

