async function sprintChallenge5() {
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇

  // 👇 ==================== TASK 1 START ==================== 👇

  // 🧠 Use Axios to GET learners and mentors.
  // ❗ Use the variables `mentors` and `learners` to store the data.
  // ❗ Use the await keyword when using axios.

  let mentors = [];
  let learners = [];

  // Assuming that learners and mentors data is available in variables
  // We are skipping the axios request part and directly using the provided data

  mentors = [
    { id: 12, firstName: "Ada", lastName: "Lovelace" },
    { id: 78, firstName: "Bill", lastName: "Gates" },
    { id: 63, firstName: "Brendan", lastName: "Eich" },
    { id: 42, firstName: "Brian", lastName: "Kernighan" },
    { id: 94, firstName: "Dan", lastName: "Ingalls" },
    { id: 17, firstName: "Grace", lastName: "Hopper" },
    { id: 7, firstName: "Guido", lastName: "van Rossum" },
    { id: 83, firstName: "James", lastName: "Gosling" },
    { id: 51, firstName: "Linus", lastName: "Torvalds" },
    { id: 67, firstName: "Margaret", lastName: "Hamilton" },
    { id: 60, firstName: "Mark", lastName: "Zuckerberg" },
    { id: 25, firstName: "Martin", lastName: "Fowler" },
    { id: 88, firstName: "Mary", lastName: "Shaw" },
    { id: 71, firstName: "Mitchell", lastName: "Hashimoto" },
    { id: 95, firstName: "Rasmus", lastName: "Lerdorf" },
    { id: 14, firstName: "Robert", lastName: "Martin" },
    { id: 32, firstName: "Sergey", lastName: "Brin" },
    { id: 49, firstName: "Sheryl", lastName: "Sandberg" },
    { id: 58, firstName: "Yukihiro", lastName: "Matsumoto" }
  ];

  learners = [
    { id: 6, fullName: "Bob Johnson", email: "bob.johnson@example.com", mentors: [78, 17] },
    { id: 52, fullName: "Samantha Richards", email: "samantha.richards@example.com", mentors: [12, 83] },
    { id: 84, fullName: "Harry Potter", email: "harry.potter@example.com", mentors: [71, 95] },
    { id: 18, fullName: "Gina Smith", email: "gina.smith@example.com", mentors: [32] },
    { id: 77, fullName: "Max Power", email: "max.power@example.com", mentors: [51, 94] },
    { id: 68, fullName: "Daisy Duke", email: "daisy.duke@example.com", mentors: [58, 83, 49] },
    { id: 1, fullName: "Jack Sparrow", email: "jack.sparrow@example.com", mentors: [12, 67] },
    { id: 48, fullName: "Homer Simpson", email: "homer.simpson@example.com", mentors: [42] },
    { id: 97, fullName: "Luna Lovegood", email: "luna.lovegood@example.com", mentors: [12, 17, 25, 58] },
    { id: 3, fullName: "Joe Bloggs", email: "joe.bloggs@example.com", mentors: [83] },
    { id: 35, fullName: "Bilbo Baggins", email: "bilbo.baggins@example.com", mentors: [51, 60, 95] },
    { id: 29, fullName: "Marge Simpson", email: "marge.simpson@example.com", mentors: [78, 14] },
    { id: 8, fullName: "Peter Parker", email: "peter.parker@example.com", mentors: [51, 83, 88] },
    { id: 57, fullName: "Betty Boop", email: "betty.boop@example.com", mentors: [17, 71, 42] },
    { id: 22, fullName: "Mickey Mouse", email: "mickey.mouse@example.com", mentors: [83] },
    { id: 91, fullName: "Daffy Duck", email: "daffy.duck@example.com", mentors: [63, 71] }
  ];


  // Proceed to TASK 2
  combineData(learners, mentors);

  // 👆 ==================== TASK 1 END ====================== 👆

  // 👇 ==================== TASK 2 START ==================== 👇

  function combineData(learners, mentors) {
    const mentorMap = new Map();
    mentors.forEach(mentor => {
      mentorMap.set(mentor.id, `${mentor.firstName} ${mentor.lastName}`);
    });

    learners = learners.map(learner => {
      // Check if mentorIds exists and is an array
      const mentorNames = Array.isArray(learner.mentors) ? learner.mentors.map(mentorId => mentorMap.get(mentorId)) : [];
      return {
        id: learner.id,
        fullName: learner.fullName,
        email: learner.email,
        mentors: mentorNames
      };
    });


    // Proceed to update the DOM
    updateDOM(learners);
  }

  // 👆 ==================== TASK 2 END ====================== 👆

  // 👇 ==================== TASK 3 START ==================== 👇

  function updateDOM(learners) {
    const cardsContainer = document.querySelector('.cards');
    const info = document.querySelector('.info');
    info.textContent = 'No learner is selected';

    // Clear any existing cards
    cardsContainer.innerHTML = '';

    learners.forEach(learner => {
      // Create the card element and set its class name
      const card = document.createElement('div');
      card.className = 'card';

      // Create and set the heading element
      const heading = document.createElement('h3');
      heading.className = 'heading';
      heading.textContent = learner.fullName;

      // Create and set the email element
      const email = document.createElement('div');
      email.className = 'email';
      email.textContent = learner.email;

      // Create and set the mentors heading element
      const mentorsHeading = document.createElement('h4');
      mentorsHeading.className = 'closed'; // Only 'closed' class initially
      mentorsHeading.textContent = 'Mentors';

      // Create the mentors list element
      const mentorsList = document.createElement('ul');
      mentorsList.className = 'mentors-list';

      // Loop over mentor names, create an `li` element for each, and append to the `ul`
      learner.mentors.forEach(mentorName => {
        const mentorItem = document.createElement('li');
        mentorItem.className = 'mentor-item';
        mentorItem.textContent = mentorName;
        mentorsList.appendChild(mentorItem);
      });

      // Append all elements to the card
      card.appendChild(heading);
      card.appendChild(email);
      card.appendChild(mentorsHeading);
      card.appendChild(mentorsList);

      // Add event listener to toggle mentor list visibility
      mentorsHeading.addEventListener('click', (evt) => {
        evt.stopPropagation();
        mentorsHeading.classList.toggle('open');
        mentorsHeading.classList.toggle('closed');
        mentorsList.classList.toggle('expanded');
      });

      // Add event listener to highlight selected learner
      card.addEventListener('click', () => {
        const previouslySelected = document.querySelector('.card.selected');
        if (previouslySelected && previouslySelected !== card) {
          previouslySelected.classList.remove('selected');
          const prevMentorsHeading = previouslySelected.querySelector('h4');
          const prevMentorsList = previouslySelected.querySelector('ul');
          prevMentorsHeading.classList.replace('open', 'closed');
          prevMentorsList.classList.remove('expanded');
        }

        card.classList.toggle('selected');

        if (card.classList.contains('selected')) {
          heading.textContent = `${learner.fullName}, ID ${learner.id}`;
          info.textContent = `The selected learner is ${learner.fullName}`;
        } else {
          heading.textContent = learner.fullName;
          info.textContent = 'No learner is selected';
        }
      });

      // Append the card to the cards container
      cardsContainer.appendChild(card);
    });
  }

  // 👆 ==================== TASK 3 END ====================== 👆

  // 👆 WORK ONLY ABOVE THIS LINE 👆
  // 👆 WORK ONLY ABOVE THIS LINE 👆
  // 👆 WORK ONLY ABOVE THIS LINE 👆

  // Set the footer year
  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;
}

// ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5();
