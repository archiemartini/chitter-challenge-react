//creates post
curl "https://chitter-backend-api-v2.herokuapp.com/peeps" \
  -X POST \
  -H "Authorization: Token token=_2a_12_xv2joPzeWLXvqubH7OEVxO" \
  -H "Content-Type: application/json" \
  -d '{"peep": {"user_id":1115, "body":"howdy sailors ;^)"}}'


  //adds like to post
  curl "https://chitter-backend-api-v2.herokuapp.com/peeps/1461/likes/1115" \
  -X PUT \
  -H "Authorization: Token token=_2a_12_xv2joPzeWLXvqubH7OEVxO"