import Game from "../types/game";

export class GamesService {
  private _games: Game[] = [
    {
      id: 'soliloquy',
      title: 'Soliloquy',
      tagline: 'Fear is a beast that feeds on attention.',
      description: '<p>Fear is a beast that feeds on attention</p>',
      price: 'TBA',
      releaseDate: new Date('September 30 2016'),
      platforms: ['TBA'],
      thumbnailImageUrl: '/images/soliloquy-tile.png'
    },
    {
      id: 'neon-ultra',
      title: 'NEON Ultra',
      tagline: 'The year is 20XX. Everything is neon, because it\'s the future.',
      description: '<p>Take control of your ship and face off against an ever-increasing swarm of asteroids and blazing enemies as you attempt to collect as many score shards as possible, leveling up your weapons as you go! The more enemies you kill without taking damage, the higher your multiplier rises. A bigger multiplier means even bigger scores!</p><p>Survive the onslaught for as long as possible and try to beat your high score!</p><ul><li>Test your reactions and concentration with fast paced addictive Gameplay</li><li>Compete against the rest of the world with Global Leaderboards</li><li>Supports both Gamepad and Keyboard + Mouse Controls</li></ul>',
      price: '$3.99',
      releaseDate: new Date('September 30 2016'),
      platforms: ['Windows', 'Mac OS', 'Linux'],
      thumbnailImageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/528270/header.jpg?t=1475219580'
    },
  ]

  all(): Promise<Game[]> {
    return Promise.resolve(this._games);
  }
}