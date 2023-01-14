{
  description = "The ";

  outputs = { self, nixpkgs }:
    let pkgs = nixpkgs.legacyPackages.x86_64-linux;
    in {
      formatter.x86_64-linux = nixpkgs.legacyPackages.x86_64-linux.nixpkgs-fmt;
      devShells.x86_64-linux.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs
          nodePackages.npm
        ];
        shellHook = "PATH=./node_modules/.bin:$PATH";
      };
    };
}
