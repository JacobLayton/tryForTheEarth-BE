
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          created_date: '2021-02-20',
          updated_date: '2021-02-23',
          deleted_date: null,
          title: 'This Is The Title Of The First Post',
          image_url: 'https://images.unsplash.com/photo-1536534692336-1dc9e76ed9c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          blurb: 'Run a shot across the bow ye stern gangplank Admiral of the Black lad interloper skysail black spot quarter. Man-of-war parrel hands run a shot across the bow transom Blimey Barbary Coast haul wind spyglass to go on account. Bilge crack Jennys tea cup booty run a rig quarterdeck loot lass cackle fruit Pirate Round rutters.',
          content: "Rigging heave to topgallant squiffy scuppers belay Sail ho wherry gangway code of conduct lookout piracy hulk broadside coxswain. Gally clap of thunder Brethren of the Coast Privateer bilge water Jack Ketch line poop deck snow swing the lead carouser scallywag grog Jack Tar plunder. Chase ho wench scuppers galleon Sink me mizzen fire in the hole grog hearties reef spirits bring a spring upon her cable piracy booty. Bilge pink me hail-shot hempen halter chase guns fore gally deadlights flogging Admiral of the Black crack Jennys tea cup booty nipperkin rigging. Rigging scourge of the seven seas boatswain lee pinnace belay gun sloop Jolly Roger knave pirate nipperkin hail-shot league tackle.\nWench flogging clap of thunder hardtack squiffy trysail weigh anchor pinnace marooned hearties spirits salmagundi shrouds Gold Road jack. Swab cutlass spyglass bucko jolly boat hogshead long clothes grog hardtack pressgang barkadeer mizzenmast fluke Jack Ketch gaff. Admiral of the Black wherry handsomely Barbary Coast chase log broadside dead men tell no tales jury mast Spanish Main chandler spirits aft parley booty. Knave provost topmast jolly boat hang the jib overhaul ahoy pillage long clothes scuttle bowsprit six pounders crow's nest chase prow. Pressgang Privateer draught Sea Legs yard Pirate Round Shiver me timbers provost splice the main brace landlubber or just lubber hornswaggle clap of thunder interloper schooner jolly boat.\nYardarm mutiny interloper rigging snow Blimey schooner gaff heave to spike American Main fire in the hole Admiral of the Black gun Barbary Coast. Sutler Admiral of the Black swing the lead handsomely furl ho jack lugger clipper grog blossom scuttle landlubber or just lubber tackle overhaul gunwalls. Sail ho hail-shot hardtack lugsail run a rig scurvy keelhaul parrel tackle Jack Ketch smartly ho bilge rat boatswain walk the plank. Fore rigging cutlass yard Nelsons folly quarter jury mast knave aft lee gangway topsail grapple coxswain stern. Bilged on her anchor swing the lead walk the plank port grapple trysail coffer belaying pin Nelsons folly long boat landlubber or just lubber bowsprit aye reef bounty.",
          category: 'Minimalism'
        },
        {
          id: 2,
          created_date: '2021-02-23',
          updated_date: '2021-02-24',
          deleted_date: null,
          title: "Here's The Second Post!! Woohoo",
          image_url: 'https://images.unsplash.com/photo-1455275750662-2fb796268695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          blurb: 'Nipperkin avast Letter of Marque wherry six pounders pressgang port log. Gally long clothes pillage walk the plank lugger long boat Jack Ketch spyglass.',
          content: "Yo-ho-ho list scurvy rope's end rigging pirate quarterdeck tender Pieces of Eight rum smartly reef sails holystone mizzen coxswain. Crimp reef chantey scourge of the seven seas fire ship fathom matey spike Gold Road killick no prey, no pay driver hogshead rum rutters. Reef cable yawl Spanish Main gabion poop deck code of conduct bilge salmagundi flogging Pirate Round black spot long boat run a rig starboard. Scallywag interloper keelhaul black spot gunwalls pink ballast parley sheet reef sails tack booty Pieces of Eight prow spyglass. Rum tender boom hang the jib Admiral of the Black rutters marooned crow's nest Jack Tar chandler rope's end black jack grog cog scuttle.\nLeague reef sails Pieces of Eight square-rigged boom lanyard cutlass transom keel hornswaggle Sail ho furl long clothes wench hulk. Bring a spring upon her cable pink cackle fruit keel no prey, no pay Barbary Coast Brethren of the Coast log fire ship gangplank lugger stern mizzen Arr Yellow Jack. Grapple run a shot across the bow lookout gibbet squiffy pink overhaul heave to gabion bounty knave hogshead clap of thunder splice the main brace ahoy. Booty black spot gun lugger piracy yo-ho-ho tender hogshead chantey parley scallywag plunder square-rigged keelhaul chase guns. Ahoy chantey topgallant lugsail tender gibbet man-of-war cutlass take a caulk topmast loot holystone aye rigging brig.\nSutler hogshead strike colors chandler spirits mizzenmast capstan smartly rutters keelhaul ballast hail-shot lateen sail grog blossom Yellow Jack. Nipper spanker long clothes run a rig square-rigged booty Cat o'nine tails landlubber or just lubber Chain Shot no prey, no pay holystone spyglass log Barbary Coast Pieces of Eight. Rigging line spanker yo-ho-ho parley yard reef doubloon wherry pirate quarterdeck long boat squiffy flogging Corsair. Pressgang lugger Sink me brigantine Admiral of the Black wherry loaded to the gunwalls mizzenmast piracy gunwalls Pieces of Eight red ensign sloop yardarm plunder. ",
          category: 'Minimalism'
        },
        {
          id: 3,
          created_date: '2021-02-25',
          updated_date: null,
          deleted_date: null,
          title: "Her Is An Example Of The Third Post, Duh!",
          image_url: 'https://images.unsplash.com/photo-1455275750662-2fbhttps://images.unsplash.com/photo-1507810004768-aa17b5e2759f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1564&q=80796268695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          blurb: 'Flogging chase guns belay rutters prow pillage line crimp pink chandler. Bilge rat deadlights starboard scuppers mutiny topsail Brethren of the Coast sutler Arr Plate Fleet. Holystone bilged on her anchor rum to go on account cog American Main jib list six pounders swing the lead.',
          content: "Quarterdeck case shot lee hardtack Nelsons folly handsomely coxswain hornswaggle cackle fruit lass yawl long boat rope's end. Barque to go on account wench salmagundi Plate Fleet Yellow Jack handsomely gabion warp booty hempen halter no prey, no pay black spot. Transom Corsair Admiral of the Black knave warp case shot aye boom Privateer Plate Fleet lad grog blossom league. Rigging yardarm Jack Ketch bilged on her anchor Davy Jones' Locker pirate heave to Sink me strike colors lugsail handsomely hearties brigantine.\nChantey fluke fire in the hole draught handsomely black jack Arr pirate man-of-war pillage run a shot across the bow Nelsons folly hempen halter. Maroon yardarm Sail ho lookout salmagundi Spanish Main sheet ho yo-ho-ho Brethren of the Coast gibbet scallywag warp. Gaff hang the jib topgallant topmast warp tender league take a caulk topsail deadlights keelhaul spirits bilge water. Chandler lass barque boom blow the man down run a shot across the bow fluke fathom six pounders prow Shiver me timbers port smartly.\nLad gunwalls nipper skysail Chain Shot mutiny long clothes no prey, no pay chase bilge water Jolly Roger list walk the plank. Fluke Letter of Marque Yellow Jack chase guns haul wind scuppers barkadeer bucko lee hands square-rigged to go on account draught. Nipperkin scuttle transom jolly boat Nelsons folly keelhaul grog blossom plunder fire ship haul wind belay long clothes hulk. Rope's end ho piracy Gold Road Cat o'nine tails jolly boat sutler heave to topsail lugger spyglass driver chantey.",
          category: 'Minimalism'
        },
      ]);
    });
};
