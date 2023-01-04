# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
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
  
    puts "Done!"
  end