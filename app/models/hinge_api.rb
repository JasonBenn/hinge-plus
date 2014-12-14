LIKE_CODE = 4
PASS_CODE = 2

class HingeAPI
  include HTTParty
  base_uri 'https://prod-hinge-mobile-02.herokuapp.com/api/v1'
  format :json

  def initialize(my_fb_id, fb_token)
    @my_fb_id = my_fb_id
    @options = { headers: { 'X-Token' => fb_token } }
  end

  def to_rate
    self.class.get("/users/#{@my_fb_id}/ratings/", @options)
  end

  def like(other_fb_id)
    rate other_fb_id, LIKE_CODE
  end

  def pass(other_fb_id)
    rate other_fb_id, PASS_CODE
  end

  def rate(other_fb_id, rating)
    body = {
      subject_fbid: other_fb_id,
      rating: rating,
      is_doublecheck: false,
      is_redo_rating: false
    }
    self.class.get("/users/#{@my_fb_id}/ratings/", @options.merge(body: body))
  end
end