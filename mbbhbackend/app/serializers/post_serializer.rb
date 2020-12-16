class PostSerializer < ActiveModel::Serializer
  
    attributes :user_id, :id, :date, :number, :good_thoughts, :bad_thoughts, :suicidal_thoughts, :meds_taken, :goals, :notes, :happy_memory, :created_at

  belongs_to :user

end
