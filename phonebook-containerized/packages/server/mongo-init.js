db.createUser({
  user: 'authed_user',
  pwd: 'secret_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'persons',
    },
  ],
});
