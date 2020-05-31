import { INodeProperties } from "n8n-workflow";

export const userOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a user.',
			},
			{
				name: 'Deactivate',
				value: 'deactivate',
				description: 'Deactivate a user.',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a user.',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all users.',
			},
			// {
			// 	name: 'Update',
			// 	value: 'update',
			// 	description: 'Update a user.',
			// },
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const userFields = [
	/* -------------------------------------------------------------------------- */
	/*                                  user:create                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: 'The email address of the new user.',
	},
	{
		displayName: 'Full Name',
		name: 'fullName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: 'The full name of the new user.',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: 'The password of the new user.',
	},
	{
		displayName: 'Short Name',
		name: 'shortName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: 'The short name of the new user. Not user-visible.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                  user:get / getAll                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'get',
				],
			},
		},
		default: '',
		description: 'The ID of user to get.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'get', 'getAll'
				],
			},
		},
		options: [
			{
				displayName: 'Client Gravatar',
				name: 'clientGravatar',
				type: 'boolean',
				default: false,
				description: 'Whether the client supports computing gravatars URLs. If enabled, avatar_url will be included in the response only if there is a Zulip avatar, and will be null for users who are using gravatar as their avatar.',
			},
			{
				displayName: 'Custom Profile Fields',
				name: 'includeCustomProfileFields',
				type: 'boolean',
				default: false,
				description: 'Whether the client wants custom profile field data to be included in the response.',
			},
		]
	},

	/* -------------------------------------------------------------------------- */
	/*                                  user:update                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'update',
				],
			},
		},
		default: '',
		description: 'The ID of user to update.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'update'
				],
			},
		},
		options: [
			{
				displayName: 'Full Name',
				name: 'fullName',
				type: 'string',
				default: '',
				description: 'The users full name.',
			},
			{
				displayName: 'Is Admin',
				name: 'isAdmin',
				type: 'boolean',
				default: false,
				description: 'Whether the target user is an administrator.',
			},
			{
				displayName: 'Is Guest',
				name: 'isGuest',
				type: 'boolean',
				default: false,
				description: 'Whether the target user is a guest.',
			},
			{
				displayName: 'Profile Data',
				name: 'profileData',
				type: 'fixedCollection',
				default: {},
				description: 'A dictionary containing the to be updated custom profile field data for the user.',
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						displayName: 'Property',
						name: 'property',
						values: [
							{
								displayName: 'ID',
								name: 'id',
								type: 'string',
								required: true,
								default: '',
								description: 'Id of custom profile data value.',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'Value of custom profile data.',
							}
						],
					},
				],
			},
		]
	},

	/* -------------------------------------------------------------------------- */
	/*                                  user:deactivate                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'deactivate',
				],
			},
		},
		default: '',
		description: 'The ID of user to deactivate.',
	},
] as INodeProperties[];
