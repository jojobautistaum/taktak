export default {
  name: 'postedBy',
  title: 'Posted By',
  // reference: will connect to documents
  type: 'reference',
  // 1 user can post multiple comments
  to: [
    {
      type: 'user',
    },
  ],
};
