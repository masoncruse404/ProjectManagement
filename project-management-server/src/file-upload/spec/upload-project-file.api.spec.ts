// - /src/file-upload/spec/upload-project-file.api.spec.ts - file upload validation 
import * as request from 'supertest';

const path = require('path');

 describe('POST /upload-project-file', () => {
   it('should have the response', async () => {
    const baseURL = 'http://localhost:3770/v1';
    const apiRequest = request(baseURL);
    const data = await apiRequest.post("/authentication/login").send({"Admin_Username" : "mason", "Admin_Password" : "test"});
    const token = data.body.data.accessToken
    const filePath = path.join(__dirname, 'json_test_data.json'); 
    const response = await apiRequest.post('/files/upload').field({"Project_ID" : "1329"}).attach('file', filePath).set({"Authorization" : `Bearer ${token}`, "Project_ID" : "Project ID 1329"});
    expect(response.status).toBe(201);
   });
 });

