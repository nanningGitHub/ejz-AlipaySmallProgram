require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../pages/job/job');
require('../../pages/news/news');
require('../../pages/my/my');
require('../../pages/log-in/log-in');
require('../../pages/forget/forget');
require('../../pages/register/register');
require('../../pages/contact-us/contact-us');
require('../../pages/resumes/resumes');
require('../../pages/edit-resumes/edit-resumes');
require('../../pages/nav-list/nav-list');
require('../../pages/MySend/MySend');
require('../../pages/jobDetails/jobDetails');
require('../../pages/jobAssistant/jobAssistant');
require('../../pages/inform/inform');
require('../../pages/job-record/job-record');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
