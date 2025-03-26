// Check out the Job Writing Guide for help getting started:
// https://docs.openfn.org/documentation/jobs/job-writing-guide

getSubmissions('aXecHjmbATuF6iGFmvBLBX', {
  query: { _submission_time: { $gte: '2022-06-12T21:54:20' } },
});
