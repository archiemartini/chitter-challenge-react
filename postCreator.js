//creates post
curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
  -X POST \
  -H "Authorization: Token token=_2a_12_xv2joPzeWLXvqubH7OEVxO" \
  -H "Content-Type: application/json" \
  -d '{"peep": {"user_id":1115, "body":"howdy sailors ;^)"}}'


  //adds like to post
  curl "https://chitter-backend-api-v2.herokuapp.com/peeps/1458/likes/1120" \
  -X PUT \
  -H "Authorization: Token token=_2a_12_GiaUZHZVn6L4fQKgFVZXMe"


{
body: "1-2 1-2"
created_at: "2022-08-10T17:23:48.749Z"
id: 1464
likes: []
updated_at: "2022-08-10T17:23:48.749Z"
user: {id: 1115, handle: 'archieparchie'}
}