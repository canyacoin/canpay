// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  contracts: {
    canYaDao: '0x17b4ae55a5b0b6c10b0f4bae2d75a4e83de41709',
    canYaCoin: '0x1b04ae0cbc58f813373ce2a854b97785762bdd34',
    useTestNet: true,
    testAccount: '0xA766743bD02AA07f5E5a7509F038028E1DEd8186'
  },
  ethNetId: 1524196056249
};
