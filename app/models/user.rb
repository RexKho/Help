class User < ApplicationRecord

    before_validation :ensure_session_token

  has_secure_password
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :username, length: { in: 3..30 }, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, allow_nil: true, length: { in: 6..255 }

  def self.find_by_credentials(username, password)
    if URI::MailTo::EMAIL_REGEXP.match(username)
      @user = User.find_by(email: username)
    else
      @user = User.find_by(username: username)
    end
    if @user && @user.authenticate(password)
        return @user
    else
        return nil
    end
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private 

  def generate_unique_session_token 
    token = SecureRandom::urlsafe_base64 
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64 
    end
    token
  end

  
  def ensure_session_token 
    self.session_token ||= generate_unique_session_token
  end
end
