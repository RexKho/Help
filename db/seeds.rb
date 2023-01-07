# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"
# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Review.destroy_all
    Business.destroy_all 

  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )

    User.create!(
      username: 'SallyHere', 
      email: 'Sally@gmail.com', 
      password: '1234password'
    )

    User.create!(
      username: 'Coco', 
      email: 'coco@gmail.com', 
      password: 'cocococo'
    )

    User.create!(
      username: 'Bellawoof', 
      email: 'Bellaaaaaaa@gmail.com', 
      password: 'iLikeTreats'
    )

    User.create!(
      username: 'Oscar', 
      email: 'OscarFish@gmail.com', 
      password: 'Feedmenow'
    )

    User.create!(
      username: 'TheRealCoco', 
      email: 'TheonlyCoco@gmail.com', 
      password: 'IamCOCO'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    puts "Creating Businesses..."

    Business.create!({
      name: "Americas Tire",
      description: "Place to get tires",
      lat: 37.586262286335604,
      long: -122.01672881495385
    })

    Business.create!({
      name: "Safeway",
      description: "Get groceries now!",
      lat: 37.58760871881577,
      long: -122.0195159006921,
    })

    Business.create!({
      name: "Donut Delight Express",
      description: "Cheap dimsum yummy yummy",
      lat: 37.58709413010123,
      long: -122.01947841314349,
    })

    Business.create!({
      name: "Costco",
      description: "You don't know what costco is?",
      lat: 37.616243058198734,
      long: -122.08920763598888
    })

    Business.create!({
      name: "Ramen Shu",
      description: "We are a pretty good ramen place. Come here!",
      lat: 37.58828535731148,
      long: -122.02332543918732,
    })

    Business.create!({
      name: "Apple Union Square",
      description: "Buy a new iPhone and become better than everyone",
      lat: 37.78870864931722,
      long: -122.40717275465131,
    })

    Business.create!({
      name: "Union Square",
      description: "If you like stepping on poop, this is the place for you",
      lat: 37.7879189576103,
      long: -122.40748235823166,
    })

    Business.create!({
      name: "Moncler",
      description: "For people who like to burn 2k on a jacket",
      lat: 37.78782013272684,
      long: -122.40652130392692,
    })
    Business.create!({
      name: "Macy's",
      description: "Shop at your hearts content. We pay our employees ok",
      lat: 37.78674617164739,
      long: -122.40743586361053,
    })

    puts "Creating Reviews..."

    Review.create!({
      rating: 5,
      body: "I LOVE TIRES OMG I COME HERE EVERYDAY",
      author_id: 2,
      business_id: 1
    })

    Review.create!({
      rating: 3,
      body: "Just a tire shop. Not that great",
      author_id: 3,
      business_id: 1
    })

    Review.create!({
      rating: 4,
      body: "Good deals on tires. Would come here again.",
      author_id: 4,
      business_id: 1
    })

    Review.create!({
      rating: 1,
      body: "Couldn't even get inside, people sleeping blocked the door.",
      author_id: 2,
      business_id: 2
    })

    Review.create!({
      rating: 5,
      body: "Very nice safeway. Gorgeous mountain in the back. Must be magic since other review doesn't have it there. ",
      author_id: 5,
      business_id: 2
    })

    Review.create!({
      rating: 4,
      body: "Good cheap dimsum. Come here for a quick fix.",
      author_id: 6,
      business_id: 3
    })

    puts "Adding pictures..."
    review = Review.find_by_id(1)
    review.photos.attach([
      # {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review1/dogtire1.jpg'), filename:'dogtire1'},
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review1/dogtire2.jpg'), filename:'dogtire2'},
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review1/dogtire3.jpg'), filename:'dogtire3'},
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review1/dogtire4.jpg'), filename:'dogtire4'}
    ])

    review = Review.find_by_id(3)
    review.photos.attach([
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review3/tire1.jpg'), filename:'tire1'},
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review3/tire2.jpg'), filename:'tire2'},
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review3/tire3.jpg'), filename:'tire3'}
    ])

    review = Review.find_by_id(4)
    review.photos.attach([
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review4/UnionCity1.jpg'), filename:'safeway1'},
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review4/UnionCity2.jpg'), filename:'safeway2'}
    ])

    review = Review.find_by_id(5)
    review.photos.attach([
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review5/canmoresafeway1.jpeg'), filename:'safeway3'},
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review5/canmoresafeway2.jpg'), filename:'safeway4'},
      {io: URI.open('https://rex-help-seeds.s3.us-west-1.amazonaws.com/review5/canmoresafeway3.jpg'), filename:'safeway5'}
    ])
    # review.photos.attach(io: URI.open("https://rex-help-dev.s3.us-west-1.amazonaws.com/m7m71gj8qjr5l4txiifovlixsgm3"), filename: "safeway1.jpg")
  
    puts "Done!"
  # end