export type betatestwelcome = {
	host_url: string
	email: string
}

export type confirmGroupRequest = {
	host_url: string
	name: string
	groupRequest: string
	link: string
}

export type email = {
	titulo: string
	texto: string
	buttonURL: string
	boton: string
}

export type congressDiscountApprove = {
	link: string
	approveLink: string
	productName: string
	discount: string
	fullname: string
	documentation: string[] | {}
}

export type congressDiscountNotify = {
	link: string
	buyLink: string
	productName: string
	discount: string
	fullname: string
}

export type emailticket = {
	fullname: string
	browserURL: string
	Ds_Order: string
	ticketName: string
	ticketDescription: string
	total: string
	qrcode: string
}

export type emailConfirmation = {
	host_url: string
	confirmation_link: string
	facebook_link: string
	twitter_link: string
	linkedin_link: string
	instagram_link: string
	mailto_link: string
	privacy_link: string
}

export type institutionalMessage = {
	host_url: string
	presentation: string
	message: string
	farewell: string
	name: string
	charge: string
	email: string
}

export type rejectGroupRequest = {
	host_url: string
	name: string
	groupRequest: string
}

export type resetPassword = {
	host_url: string
	name: string
	link: string
}

export type main = {
	
}

export type error = {
	userMessage: string
}

export type generic = {
	emailTitle: string
	emailPreHeaderText: string
	catchPrase: string
	emailHeader: string
	emailBody: string
	buttonLink: string
	buttonCaption: string
	afterActionText: string
	contactAddress: string
	contactDetails: string
	facebookLink: string
	googleLink: string
	twitterLink: string
	lindeinLink: string
	youtubeLink: string
	instagramLink: string
	browserViewLink: string
	disclaimerText: string
	privacyLink: string
	unsubscribeLink: string
}

export type baseheader = {
	
}

export type basestyles = {
	
}
