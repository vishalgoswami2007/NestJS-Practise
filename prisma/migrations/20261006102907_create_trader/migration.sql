-- CreateTable
CREATE TABLE "trader" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trader_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trader_username_key" ON "trader"("username");

-- CreateIndex
CREATE UNIQUE INDEX "trader_email_key" ON "trader"("email");
