import { Request, Response } from "express";
import spotify from "../config/spotify";

export const login = (_: Request, res: Response) => {
  const scopes = [
    "playlist-modify-public",
    "playlist-modify-private",
    "user-library-read",
  ];

  const state = "playlist-maker";
  const authorizeUrl = spotify.createAuthorizeURL(scopes, state);

  res.json({ url: authorizeUrl });
};

export const callback = async (req: Request, res: Response) => {
  try {
    const grant = await spotify.authorizationCodeGrant(
      req.query.code as string
    );

    res.status(grant.statusCode).json(grant.body);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Login failed!" });
  }
};
