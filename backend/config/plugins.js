module.exports = ({ env })=>({
    upload: {
      config: {
        providerOptions: {
          localServer: {
            maxage: 300000
          },
        },
      },
    },
  });
  
// module.exports = {
//     upload: {
//       config: {
//         sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
//       }
//     }
//   };
// module.exports = ({ env }) => ({
//     // ...
//     upload: {
//       config: {
//         provider: 'local',
//         // providerOptions: {
//         //   sizeLimit: 100000,
//         // },
//       },
//     },
//     // ...
//   });