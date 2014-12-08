namespace :db do
  task populate: :environment do
    Match.destroy_all

    TAGS = ["adrenaline junkie", "outdoor adventurer", "animal lover", "health nut", "lawn game champion", "ski bum", "beach bum", "joker", "sports fan", "leisure diver", "bookworm", "science nerd"]

    def random_tags
      (rand(15) + 2).times.map { TAGS.sample }.join(', ')
    end

    20.times do
      Match.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        last_seen: Date.today - rand(72).hours,
        about_me: Faker::HipsterIpsum.words(rand(50) + 50).join(' '),
        work: Faker::Company.name,
        college: Faker::Education.school,
        height: '5\'7"',
        tags: random_tags,
        mutual_friends: rand(40)
      )
    end
  end
end