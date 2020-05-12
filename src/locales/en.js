export default {
  contact: "Contact",
  name: "Name",
  phone: "Phone",
  content: "Content",
  submit: "Submit",
  askButton: "FAQ",
  required: "wrong format",
  infoProtected: [
    "All information will be kept confidential as signatures which are modified on a daily basis.",
    "The more people use CoviTrack, the more protected you will be.Please install the app and help your loved ones. ",
  ],
  header: ["Home", "FAQ"],
  moh: [
    "When a user is found or suspected of being infected",
    "Health authority will require access to this data to quickly identify people who have had direct or indirect contact with that user, whether you know them or not.",
  ],
  sendInfoSuccess: "Send information successfully",
  protect:
    "CoviTrack will protect you and your family from the risk of infection",
  covitrackWork: [
    "CoviTrack uses Bluetooth signals to identify when your phone is near another CoviTracker",
    "Both phone will exchange anonymized ID and record the contact",
    "Even if two CoviTrackers do not meet face to face but have similar itinerary, the location data will be recorded.",
  ],
  banner: [
    "CoviTrack",
    "Use Bluetooth Low Energy (BLE) technology to keep a record of close contacts in the community",
    "Combined with location-tracking technology in order to not omit indirect contact cases",
    "Showing Voluntary Support to prevent and control Covid-19",
    "Protect yourself",
    "Protect your loved ones",
    "Protect the community",
  ],
  tutorial: [
    "Protect yourself and the community from Covid-19 with just 2 simple steps:",
    "1. Download CoviTrack and help",
    "2. Turn on Bluetooth and Location",
    "And it is as simple as that to gain some peace of mind when going out",
  ],
  faqContent: [
    {
      title: "Must the device always turn Bluetooth on ?",

      description:
        "Not necessarily. However, users should turn on Bluetooth in public places, crowded places or when interacting with strangers to protect themselves and the community. ",
    },
    {
      title:
        "Is there any harm to the community if the phone is always on Bluetooth?",
      description:
        "This is like using Wifi in the community, because Bluetooth and Wifi work on 2.4 GHz. So users can completely use as normal.",
    },
    {
      title: "If Bluetooth is on, can my phone be easily hacked?",
      description:
        "Bluetooth is a standard connection method that are widely used today and has been proven of high security.",
    },
    {
      title:
        "What if people don't have Bluetooth devices or they don't turn it on. How to solve this problem?",
      description:
        "Turning on Bluetooth is the right of each individual. In order to protect themselves and the. community, people should use CoviTrack regularly. If users turn off Bluetooth, assuming they are in contact with someone infected with COVID-19, this contact will not be recorded.  If the number of users is large enough, even those who do not use smartphones will also be protected.",
    },
    {
      title:
        "How will CoviTrack handle cases of non-Smartphone use, for example elderly people?",
      description:
        "When the number of users is large enough, the community will be protected including those who do not use smartphones.",
    },
    {
      title:
        "Is this CoviTrack practical, because not everyone turns on Bluetooth?",
      description:
        "Turning on Bluetooth is the right of each individual. In order to protect themselves and the. community, people should use CoviTrack regularly. If users turn off Bluetooth, assuming they are in contact with someone infected with COVID-19, this contact will not be recorded. If the number of users is large enough, even those who do not use smartphones will also be protected.",
    },
    {
      title: "Does CoviTrack drain the battery?",
      description:
        "CoviTrack uses Bluetooth Low Energy (Bluetooth Low Energy) technology to save battery as much as possible. However, you can limit battery drain by turning off Bluetooth when you have no contact with anyone else.",
    },
    {
      title:
        "Does CoviTrack run in the background, or do I have to turn it on to use it?",
      description:
        "CoviTrack will remain active even when it is turned off or when you use other applications. Please note that Bluetooth should always be on to ensure adequate contact recording.",
    },
    {
      title: `In case there is data, will Bluezone have the function of signaling you are approaching COVID-19’?`,
      description:
        "According to the rule, a person who has been identified as infected with COVID-19 will have to be quarantined, so there is no way you accidentally ‘get close’ to such a patient; CoviTrack does not have this feature either.",
    },
    {
      title:
        "What characteristics of CoviTrack that are more prominent than similar solutions?",
      description:
        "CoviTrack incorporates geolocation access so as not to miss indirect contacts. Even when a person infected with Covid-19 has left your current location, the system will still mark the location where the two of you used to be in a timely manner. To overcome the limitation of IOS, that two applications running in the background will not scan each other, for CoviTrack, if there is an Android or IOS application running foreground, scan successfully the applications running in the background, the system will recognize all devices meet at that time. In terms of security, the third party cannot get your information without OTP code verification, the relayed Bluetooth information is secured by signatures and updated every day, helping to minimize the possibility of someone transmitting impersonated signals. CoviTrack will not scan BLE transmitters that are not CoviTrack users, such as speakers, radios, televisions, headsets, etc., so it will not record unnecessary disturbances. Bluetooth is also a solution that Europeans, Americans and Singaporeans started to research and apply in COVID-19 anti-epidemic. Especially for the purpose of helping life return to normal, after the peak period of the epidemic. ",
    },
  ],
  appfunc: [
    {
      title: "Security",
      image: require("../assets/icon/covitrack1.svg"),
      descriptions: [
        "Phone numbers authenticated by health authorities via OTP",
        "Third party cannot get your information without verification",
        "The advertised Bluetooth information is signed and updated by the system everyday to minimize the possibility of impersonation acts",
      ],
    },
    {
      title: "Accurate and High-speed Scanning",
      image: require("../assets/icon/covitrack2.svg"),

      descriptions: [
        "Only scan devices that are users in the system",
        "Save indirect contacts by keeping a record of your itinerary",
        "Running effectively without internet",
        "Can be used simultaneously with other applications and when screens are off",
      ],
    },
    {
      title: "Incognito",
      image: require("../assets/icon/covitrack3.svg"),
      descriptions: [
        "Users are anonymous to others",
        "Only when infected with Covid-19 or at risk of infection, you can share this data with the health authorities",
      ],
    },
    {
      title: "User has full control over shared data",
      image: require("../assets/icon/covitrack4.svg"),
      descriptions: [
        "User can allow location access or not",
        "User has full right to log out at any time yet still can sign in again when needed",
      ],
    },
  ],
};
