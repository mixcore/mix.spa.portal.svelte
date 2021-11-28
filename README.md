# MixCore Portal
## How to setup
Run `git clone --recursive https://github.com/mixcore/mix.portal.svelte.git` 

OR `git clone --recursive git@github.com:mixcore/mix.portal.svelte.git` for SSH.

If already cloned the repo then run `git submodule update --init --recursive`

## Install dependencies
Go to folder `cd mix.portal.svelte`

Run `yarn`

## Development server
Run `nx serve mix-portal` for a Mix Portal dev server.

Run `nx serve mix-site-management` for Mix Site Management dev server.

# Create new Apps/Libs
## Generate an application
Run `nx g @nxext/svelte:app [application-name]` to generate an application.

## Generate a library
Run `nx g @nxext/svelte:lib [lib-name]` to generate a library.
