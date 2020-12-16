
Post.destroy_all
User.destroy_all

User.create(username: "Pretzel", password: "123", email: "austinoie@gmail.com", name: "Austin Oie", birthday: "7/25/1981", age: 39, gender: "Male", sexual_orientation: "bisexual", zipcode: 53545)

# User.create(username: "WookieBender", password: "123", email: "ralphMalph@gmail.com", name: "Ralph Wiggum", birthday: "1/1/1946", age: 8, gender: "Male", sexual_orientation: "undecided", zipcode: 11111)

# User.create(username: "Bartman", password: "123", email: "IThinkIllCallHimStampy@gmail.com", name: "Bart Simpson", birthday: "7/01/1901", age: 10, gender: "Male", sexual_orientation: "pansexual", zipcode: 53545)

# User.create(username: "TheHawHaw", password: "123", email: "hawhaw@gmail.com", name: "Nelson Muntz", birthday: "8/5/2002", age: 26, gender: "Male", sexual_orientation: "bisexual", zipcode: 53545)

# User.create(username: "DustinHoffman", password: "123", email: "theHoff@gmail.com", name: "Mr Bergstrom", birthday: "9/4/1956", age: 42, gender: "Male", sexual_orientation: "bisexual", zipcode: 53545)





Post.create(user_id: User.first.id, date: "11/01/2020", number: 7, good_thoughts: "I believed in myself today, and thought myself capable.", bad_thoughts: "My good vibes started out with self-doubt", suicidal_thoughts: true, meds_taken: false, goals: "Graduate!", notes: "Not today, Satan!", happy_memory: "Walking through the fall leaves with the one I love, a chai latte, and corduroy something or other.")

Post.create(user_id: User.first.id, date: "11/02/2020", number: 3, good_thoughts: "I struggled with good thoughts today, but I know that they aren't far away.", bad_thoughts: "Am I truly lovable?", suicidal_thoughts: true, meds_taken: true, goals: "Finish this mod5 project", notes: "You could believe in yourself more.", happy_memory: "The way the sun glowed off the lake at sundown. When everything was so clear on so many levels.")

Post.create(user_id: User.first.id, date: "11/03/2020", number: 2, good_thoughts: "There are going to be more days like this, and less :)", bad_thoughts: "I think I make a bad first impression", suicidal_thoughts: true, meds_taken: true, goals: "To look at myself in the mirror and tell myself I'm worthy.", notes: "Be kinder to yourself.", happy_memory: "When the air was still up in the mountains of Boulder. When nothing else mattered. When I literally couldn't breathe.")

Post.create(user_id: User.first.id, date: "11/04/2020", number: 8, good_thoughts: "I woke up today ready to take on the world.", bad_thoughts: "I'm ending the day thinking the world took over me.", suicidal_thoughts: true, meds_taken: false, goals: "Start keeping a better schedule.", notes: "I'm really starting to like this app!", happy_memory: "When Dad fished me out of the lake as a young boy. I can remember falling off the pier and calmly staring up, while has hands plunged into the water to retrieve me.")

Post.create(user_id: User.first.id, date: "11/05/2020", number: 5, good_thoughts: "I applied for new jobs today, and for the first time considered myself qualified", bad_thoughts: "I got ghosted and its because of who I am.", suicidal_thoughts: true, meds_taken: true, goals: "Eat more veggies!", notes: "Each day is a miracle.", happy_memory: "Learning how to breathe again. Learning how to lean into the heartbreak and sadness, and become strange bedfellows with it.")

Post.create(user_id: User.first.id, date: "11/06/2020", number: 9, good_thoughts: "I look good in this button-down.", bad_thoughts: "It might be too revealing.", suicidal_thoughts: true, meds_taken: false, goals: "To polish up my resume and keep on the hunt!", notes: "Don't forget tech demos", happy_memory: "When Raza called Ignas the first draft of the Mona Lisa.")

Post.create(user_id: User.first.id, date: "11/07/2020", number: 10, good_thoughts: "My family really cares about my well-being, and accepts me.", bad_thoughts: "I'm the inevitable black sheep.", suicidal_thoughts: true, meds_taken: true, goals: "Get a better job that respects you, and respects your ethic.", notes: "Write some follow up emails!", happy_memory: "Performing in that bar where everyone got really drunk. That was a bitchin' set on the first day of spring.")

Post.create(user_id: User.first.id, date: "11/08/2020", number: 4, good_thoughts: "I realized today that my problems aren't unique.", bad_thoughts: "I don't think anyone understands me.", suicidal_thoughts: true, meds_taken: true, goals: "I'm going to eat an entire pizza.", notes: "None today, you're on your shit!", happy_memory: "Every single time I successfully compiled and rendered.")

Post.create(user_id: User.first.id, date: "11/09/2020", number: 7, good_thoughts: "Ignas really cares and wants me to succeed", bad_thoughts: "Ignas wants to be left alone, especially by me.", suicidal_thoughts: true, meds_taken: false, goals: "Get a good nights sleep for the first time in weeks", notes: "All is well yet again.", happy_memory: "Learning things from Ignas. If I can retain 20% of what he's teaching, I'll be a genius.")

Post.create(user_id: User.first.id, date: "11/10/2020", number: 1, good_thoughts: "None.", bad_thoughts: "All.", suicidal_thoughts: true, meds_taken: true, goals: "To pull myself out of this rut.", notes: "Figure out concrete ways to do so", happy_memory: "Going grocery shopping for booze on my brothers 21st birthday in Macomb, IL. Despite having horse hitches in the parking lot, we still left with gin n juice.")

Post.create(user_id: User.first.id, date: "11/11/2020", number: 1, good_thoughts: "Another bad day, but I know it'll get better.", bad_thoughts: "Two days in a row of this seems like too much.", suicidal_thoughts: false, meds_taken: true, goals: "Treat myself to something nice.", notes: "This isn't permanent.", happy_memory: "Being able to say hello to the mod behind us at stand up. Such fresh faces, me only 6 weeks ago.")

Post.create(user_id: User.first.id, date: "11/12/2020", number: 2, good_thoughts: "I think I'm finally starting to come out of this funk I've been in.", bad_thoughts: "What if I'm about ready to take another tumble?", suicidal_thoughts: false, meds_taken: true, goals: "To pick myself up today, not tomorrow.", notes: "You can do this!", happy_memory: "Twelfth happy memory")

Post.create(user_id: User.first.id, date: "11/13/2020", number: 4, good_thoughts: "Got a haircut today, and the mullet is gone.", bad_thoughts: "Am I hireable?", suicidal_thoughts: false, meds_taken: true, goals: "To find happiness in a new locale", notes: "This was a day like none other, and no other day will be like the last.", happy_memory: "Riding down a waterslide with a German tourist in the suburbs of Chicago. Oh shit. Oh fuuuck.")

Post.create(user_id: User.first.id, date: "11/14/2020", number: 6, good_thoughts: "I have lots of new and interesting ideas", bad_thoughts: "I haven't done anything with my life.", suicidal_thoughts: false, meds_taken: true, goals: "Apply for scholarships", notes: "Look up deadlines for those scholarships", happy_memory: "Joanna confessing how drunk she was at the end of Feelings Friday.")

Post.create(user_id: User.first.id, date: "11/15/2020", number: 9, good_thoughts: "My left brain is just as strong as my right.", bad_thoughts: "But my right brain is still got a leg up.", suicidal_thoughts: false, meds_taken: true, goals: "Stop being afraid of vanilla JS", notes: "Don't forget about LinkedIn", happy_memory: "Ian Hollander.")

Post.create(user_id: User.first.id, date: "11/16/2020", number: 9, good_thoughts: "People think I'm a lot younger than I am.", bad_thoughts: "I'm actually much older than I look.", suicidal_thoughts: false, meds_taken: true, goals: "Start moisturizing your face.", notes: "None today", happy_memory: "Going to Devil's Lake after leaving my entire previous life behind. It was more peace than I've felt in years.")

Post.create(user_id: User.first.id, date: "11/17/2020", number: 7, good_thoughts: "You've made a lot of new friends over the last 3 months", bad_thoughts: "Will I ever talk to these people again?", suicidal_thoughts: false, meds_taken: true, goals: "Hit the ground running and get people interested in you.", notes: "Did you see they way they looked at you?", happy_memory: "Waking up next to you and feeling just as shitty that you did, after drinking so very much Limoncello.")

Post.create(user_id: User.first.id, date: "11/18/2020", number: 5, good_thoughts: "My life is full of possibility", bad_thoughts: "What if I don't get to live somewhere I like?", suicidal_thoughts: false, meds_taken: true, goals: "Keep applying, keep applying!", notes: "Not much today", happy_memory: "Making her laugh. It always makes you feel like you're king of the world when you make her laugh.")

Post.create(user_id: User.first.id, date: "11/19/2020", number: 5, good_thoughts: "Tomorrow is going to be better than today", bad_thoughts: "Will I ever write another song?", suicidal_thoughts: false, meds_taken: true, goals: "To pass. Just pass. That's all I want.", notes: "Don't forget to breathe, dummy.", happy_memory: "Going to DisneyQuest when I was in high school. It was the first time I got to wield a lightsaber in VR.")

Post.create(user_id: User.first.id, date: "11/20/2020", number: 8, good_thoughts: "You can do anything you want to do, you are capable.", bad_thoughts: "Failure is inevitable.", suicidal_thoughts: false, meds_taken: true, goals: "Twentieth goals", notes: "Twentieth note!", happy_memory: "Twentieth happy memory")

Post.create(user_id: User.first.id, date: "11/21/2020", number: 5, good_thoughts: "We lead many lives in the course of one. You can always shed your skin and try again.", bad_thoughts: "There's no way out of feeling this way.", suicidal_thoughts: false, meds_taken: true, goals: "Eat more fruit.", notes: "Talk to your therapist about this issue.", happy_memory: "Riding a sled and crashing headlong into the side of a garage.")

Post.create(user_id: User.first.id, date: "11/22/2020", number: 8, good_thoughts: "I have so much potential I can't wait to meet.", bad_thoughts: "What if I can't get a job?", suicidal_thoughts: false, meds_taken: true, goals: "Start to play music for people again", notes: "Restring your dusty guitar", happy_memory: "Playing a song for my cohort. Easily one of the scariest things I've ever done.")

Post.create(user_id: User.first.id, date: "11/23/2020", number: 9, good_thoughts: "I'm a late bloomer, and here I am, blooming late. I won't compare myself to others.", bad_thoughts: "I feel like I'm always lagging behind the group.", suicidal_thoughts: false, meds_taken: true, goals: "Learn Python!", notes: "Have a look over Udemy courses and subscribe to some.", happy_memory: "Being unabashedly unafraid to talk about who I am, and what I'm made up of, in front of strangers who would become friends.")

Post.create(user_id: User.first.id, date: "11/24/2020", number: 10, good_thoughts: "This is the best day I've had in a long time", bad_thoughts: "Things can only get worse from here.", suicidal_thoughts: false, meds_taken: true, goals: "Keeping the hot streak of 10 days going", notes: "Tomorrow will be just as good.", happy_memory: "Playing silly games with my family around the holidays. If you haven't swung an orange from stockings you haven't lived.")

Post.create(user_id: User.first.id, date: "11/25/2020", number: 7, good_thoughts: "Though today wasn't as good as yesterday, at least there's a silver lining!", bad_thoughts: "I dont know if I can keep up with this journal.", suicidal_thoughts: false, meds_taken: true, goals: "To make captain", notes: "None today!", happy_memory: "Walking along the beach in South Carolina, and listening to the waves. Covered in soap, itchy, and ready to be bathed and reborn.")

Post.create(user_id: User.first.id, date: "11/26/2020", number: 7, good_thoughts: "Your family really appreciates you, and would do anything for you.", bad_thoughts: "I'm resentful of my partner's success.", suicidal_thoughts: false, meds_taken: true, goals: "Become more independent", notes: "Don't forget to schedule your appointment with the dermatologist", happy_memory: "Do you remember the first time you were able to teach something to someone at FlatIron? I never thought I would get to that point in my knowledge but it felt so good to help out someone who struggles just as much as you do.")

Post.create(user_id: User.first.id, date: "11/27/2020", number: 3, good_thoughts: "I'm almost done making up this seed data.", bad_thoughts: "Is one month enough?", suicidal_thoughts: false, meds_taken: true, goals: "To meet with my therapist at least 3 times a month", notes: "You can do this!", happy_memory: "Touring through Germany and Amsterdam. There are too many to remember, but stumbling through Madame Tussauds replete with a haunted house was just... hilarious.")

Post.create(user_id: User.first.id, date: "11/28/2020", number: 6, good_thoughts: "We're almost to the end of month and December is when the fun begins.", bad_thoughts: "Its going to be so cold and I'm never going to leave the house", suicidal_thoughts: false, meds_taken: true, goals: "Eat more candy!", notes: "Just kidding, don't eat more candy.", happy_memory: "Visting Mont San Michel and staying the night. Washing the water rush in from the edge of nowhere is an experience to behold.")

Post.create(user_id: User.first.id, date: "11/29/2020", number: 5, good_thoughts: "There are so many things I didn't think I was capable of, and everyone believed in me but me.", bad_thoughts: "Why don't you believe in yourself as much as everyone else does?", suicidal_thoughts: false, meds_taken: true, goals: "Stick it to the man.", notes: "Don't forget how to celebrate.", happy_memory: "Coming home from a very long night, and having someone so in tune with you that you needn't even ask. It's already ready.")

Post.create(user_id: User.first.id, date: "11/30/2020", number: 9, good_thoughts: "We've reached the end of the month!", bad_thoughts: "We've reached the end of the month.", suicidal_thoughts: false, meds_taken: true, goals: "Get a job by January :)", notes: "Its not gonna get any easier, but you got this!", happy_memory: "Getting the full support and encouragement from my family and friends to attend the FlatIron program.")



puts 'Kiss kiss bang bang!'
