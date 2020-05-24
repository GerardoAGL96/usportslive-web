const rules: Rules = {
  Visitor: {
    static: [
      'dashboard-page:visit',
      'user:login',
      'user:signup',
    ],
  },
  Normal: {
    static: [
      // Page visits
      'dashboard-page:visit',
    ]
  },
  Audiovisual: {
    static: [
      // Page visits
      'admin-page:visit',
      'dashboard-page:visit',
      // Actions
      'stream:create',
      'stream:update',
      'game-point:create',
      'game-point:delete',
    ],
  },
  Teacher: {
    static: [
      // Page visits
      'admin-page:visit',
      'dashboard-page:visit',
      // Actions
      'sport:create',
      'sport:update',
      'competition:create',
      'competition:update',
      'competition:delete',
      'team:create',
      'team:update',
      'team:delete',
      'competition-team:create',
      'competition-team:remove',
      'competition-game:create',
      'competition-game:create-many',
      'competition-game:update',
      'competition-game:delete',
      'game-point:create',
      'game-point:delete',
      'user-person:assign',
      'team-player:create',
      'team-player:add',
      'team-player:update',
      'team-player:delete',
      'stream:create',
      'stream:update',
    ]
  },
  Administrator: {
    static: [
      // Page visits
      'admin-page:visit',
      'dashboard-page:visit',
      // Actions
      'sport:create',
      'sport:update',
      'sport:delete',
      'competition:create',
      'competition:update',
      'competition:delete',
      'team:create',
      'team:update',
      'team:delete',
      'user:suspend',
      'competition-team:create',
      'competition-team:remove',
      'competition-game:create',
      'competition-game:create-many',
      'competition-game:update',
      'competition-game:delete',
      'game-point:create',
      'game-point:delete',
      'user-person:assign',
      'team-player:create',
      'team-player:add',
      'team-player:update',
      'team-player:delete',
      'stream:create',
      'stream:update',
    ],
    dynamic: {
      'user:update': (data) => {
        if (data)
          return true;

        return false;
      }
    }
  }
};

export type Rules = {
  [key: string]: {
    static?: Array<string>,
    dynamic?: {
      [key: string]: (data: object) => boolean,
    }
  }
}

export default rules;