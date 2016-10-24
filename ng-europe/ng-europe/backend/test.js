


var myuser = new ds.User();
myuser.login = "bob";
myuser.save()

var messages = new ds.Messages();
messages.userId = myuser;
messages.message = "Hello";
messages.save();

ds.Messages.find()
.query()
