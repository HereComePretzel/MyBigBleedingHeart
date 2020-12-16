class User < ApplicationRecord
    has_secure_password
    has_many :posts

PASSWORD_REQUIREMENTS = /\A 
    (?=.{8,}) # at least 8 characters
    (?=.*\d) # at least 1 number
    (?=.*[a-z]) # at least 1 lowercase
    (?=.*[A-Z]) # at least one uppercase
    (?=.*[[:^alnum:]]) # at least 1 symbol
/x
    validates :password, format: PASSWORD_REQUIREMENTS
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    



    

end
