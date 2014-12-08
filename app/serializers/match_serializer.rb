class MatchSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :last_seen, :about_me, :work, :college, :height, :tags, :mutual_friends
end