class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :password, :email, :name, :birthday, :age, :gender, :sexual_orientation, :zipcode
  
  has_many :posts
  
end
