class PostSerializer < ActiveModel::Serializer
  
    attributes :user_id, :id, :date, :number, :goodThoughts, :badThoughts, :suicidalThoughts, :medsTaken, :goals, :notes, :happyMemory, :created_at

  belongs_to :user

end
