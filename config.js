// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Maro <3",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Bobo? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '💜'  ],  // Heart emojis 
        bears: ['🧸', '🐻','🥹'],                       // Cute bear emojis 
        flowers: ['🌹', '🌷', '🌸', '🌼', '🌺', '🌻']
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! 💜"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dxzqebqz9/video/upload/v1770895079/Heat_Waves_with_iann_dior_opfaem.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    },

        // 💖 OUR MEMORIES GALLERY 💖
    pictures: {
        enabled: true,
        sectionTitle: "Our Beautiful Memories Together 💕",
        images: [
            {
                url: "https://drive.google.com/uc?export=view&id=12ODvqxApThQCVHmC2pLe6YAnmPo1jPJf",
                caption: "hehe don't look at me <3"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=17tYLtMiBFjAl5B6Rru3a3vL6UMVU6rdR",
                caption: "Perfect moment 🥰"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=19WjhCpFJJJ6G6QUPzT6FYdFEiBBZLVCV",
                caption: "Such a queen attitude hehe"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1A-ZvKZ7AnSJ0q-zojK0jlitcZbpByPtn",
                caption: "My favorite view ❤"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1DeX4ccBEHgoV1EYije85h-EUzJ3J4rFj",
                caption: "The 💖 in your hand"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1JLlOiLE7e6h7rx_hNgkBtiUagFcoq9O7",
                caption: "pizaaaaa haha"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1Kz3qZYTm7W_SBT25AWK8E6l59yHqNh3G",
                caption: "OMG there is a smileeeee 💕"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1LlYegNJPC-vFuwkf93L6dNZhCMrQTXis",
                caption: "Another smileeee ✨"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1WS1fH00kWHV8yjsd_URk_TeVFe1dCVAa",
                caption: "My two favorite things in the world <3"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1hokwsTJ-I5YNXw7bijbF0Nf6iLp8ji5-",
                caption: "you being gergouse in a smoll cuppp"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1nT2iXCuCRFkXNiki93-o3k6GiHC7CyiV",
                caption: "So this is ART looking at a painting"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1paek_vKAu8yZGPn1xby4kxQ76VdW_OoM",
                caption: "Beautiful you 🌹"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1qKyLKLl5crY3HiGCQ99ngr0Ok7rXExrv",
                caption: "A jasime a strawberry and a sun kiss <3 my heart is melting."
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1tRE7VwqVyFBfHhWok0XYnuBHmg1twVbH",
                caption: "One of my favorites 🧸"
            },
            {
                url: "https://drive.google.com/uc?export=view&id=1wusmf1JX0PQXM6DmYC8Z33A9bI59pksn",
                caption: "Shes is the most tasty bobo in the world hehe"
            }
        ],
        style: {
            maxWidth: "280px",
            borderRadius: "20px",
            shadow: "0 10px 25px rgba(255, 107, 107, 0.4)",
            gap: "25px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "30px 20px",
            titleColor: "#ff4757"
        }
    }
    
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
